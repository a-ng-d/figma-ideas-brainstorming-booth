import { ConsentConfiguration } from '@a_ng_d/figmug-ui'
import React from 'react'
import { uid } from 'uid'

import { locals } from '../../content/locals'
import { Language, PlanStatus } from '../../types/app'
import {
  ActivityConfiguration,
  NoteConfiguration,
  UserConfiguration,
} from '../../types/configurations'
import { ActivitiesMessage } from '../../types/messages'
import { ActionsList } from '../../types/models'
import { UserSession } from '../../types/user'
import { AppStates } from '../App'
import ActivitiesList from '../modules/ActivitiesList'
import Settings from '../modules/Settings'

interface ActivitiesProps {
  activities: Array<ActivityConfiguration>
  userSession: UserSession
  userConsent: Array<ConsentConfiguration>
  userIdentity: UserConfiguration
  planStatus: PlanStatus
  lang: Language
  onChangeActivities: React.Dispatch<Partial<AppStates>>
}

interface ActivitiesStates {
  view: 'ACTIVITIES' | 'SETTINGS' | 'HISTORY'
  openedActivity?: string
}

export default class Activities extends React.Component<
  ActivitiesProps,
  ActivitiesStates
> {
  activitiesMessage: ActivitiesMessage

  constructor(props: ActivitiesProps) {
    super(props)
    this.activitiesMessage = {
      type: 'UPDATE_ACTIVITIES',
      data: [],
    }
    this.state = {
      view: 'ACTIVITIES',
      openedActivity: undefined,
    }
  }

  // Handlers
  activitiesHandler = (e: any) => {
    const currentElement: HTMLInputElement = e.currentTarget

    const addActivity = () => {
      const hasAlreadyNewActivity = this.activitiesMessage.data.filter(
        (activity) => activity.name.includes('New activity')
      )

      this.activitiesMessage.data = this.props.activities
      this.activitiesMessage.data.push({
        name: `${locals[this.props.lang].activities.newActivity} ${hasAlreadyNewActivity.length + 1}`,
        description: '',
        instructions: '',
        groupedBy: 'PARTICIPANT',
        timer: {
          minutes: 10,
          seconds: 0,
        },
        noteTypes: [
          {
            name: locals[this.props.lang].settings.noteTypes.defaultNoteType,
            color: 'YELLOW',
            hex: '#FFD966',
            id: uid(),
          },
        ],
        meta: {
          id: uid(),
          publicationStatus: {
            isPublished: false,
            isShared: false,
          },
          dates: {
            createdAt: new Date().toISOString(),
            updatedAt: '',
            publishedAt: '',
          },
          creatorIdentity: {
            fullName: '',
            avatar: '',
            id: '',
          },
        },
      } as ActivityConfiguration)

      return sendData()
    }

    const removeActivity = () => {
      this.activitiesMessage.data = this.props.activities.filter(
        (activity) => activity.meta.id !== this.state.openedActivity
      )

      this.setState({
        view: 'ACTIVITIES',
        openedActivity: undefined,
      })

      return sendData()
    }

    const renameActivity = () => {
      const hasSameName = this.props.activities.filter(
        (activity) => activity.name === currentElement.value
      )

      this.activitiesMessage.data = this.props.activities.map((item) => {
        if (item.meta.id === this.state.openedActivity)
          item.name =
            hasSameName.length > 1
              ? currentElement.value + ' 2'
              : currentElement.value
        return item
      })

      return sendData()
    }

    const updateDescription = () => {
      this.activitiesMessage.data = this.props.activities.map((item) => {
        if (item.meta.id === this.state.openedActivity)
          item.description = currentElement.value
        return item
      })

      return sendData()
    }

    const updateInstructions = () => {
      this.activitiesMessage.data = this.props.activities.map((item) => {
        if (item.meta.id === this.state.openedActivity)
          item.instructions = currentElement.value
        return item
      })

      return sendData()
    }

    const updateGroupedBy = () => {
      this.activitiesMessage.data = this.props.activities.map((item) => {
        if (item.meta.id === this.state.openedActivity)
          item.groupedBy = currentElement.dataset.value as
            | 'PARTICIPANT'
            | 'NOTE_TYPE'
        return item
      })

      return sendData()
    }

    const updateTimerMinutes = () => {
      let minutes = parseFloat(currentElement.value)
      minutes <= 0 ? (minutes = 0) : minutes
      minutes >= 60 ? (minutes = 60) : minutes
      Number.isNaN(minutes) ? (minutes = 0) : minutes

      this.activitiesMessage.data = this.props.activities.map((item) => {
        if (item.meta.id === this.state.openedActivity)
          item.timer.minutes = minutes
        return item
      })

      return sendData()
    }

    const updateTimerSeconds = () => {
      let secondes = parseFloat(currentElement.value)
      secondes <= 0 ? (secondes = 0) : secondes
      secondes >= 59 ? (secondes = 59) : secondes
      Number.isNaN(secondes) ? (secondes = 0) : secondes

      this.activitiesMessage.data = this.props.activities.map((item) => {
        if (item.meta.id === this.state.openedActivity) {
          item.timer.seconds = secondes
          item.timer.minutes === 0
            ? (item.timer.seconds = 30)
            : item.timer.seconds
        }

        return item
      })

      return sendData()
    }

    const sendData = () => {
      this.props.onChangeActivities({
        activities: this.activitiesMessage.data,
        onGoingStep: 'activities changed',
      })

      parent.postMessage({ pluginMessage: this.activitiesMessage }, '*')
    }

    const actions: ActionsList = {
      ADD_ACTIVITY: () => addActivity(),
      REMOVE_ACTIVITY: () => removeActivity(),
      RENAME_ACTIVITY: () => renameActivity(),
      UPDATE_DESCRIPTION: () => updateDescription(),
      UPDATE_INSTRUCTIONS: () => updateInstructions(),
      UPDATE_GROUPED_BY: () => updateGroupedBy(),
      UPDATE_TIMER_MINUTES: () => updateTimerMinutes(),
      UPDATE_TIMER_SECONDS: () => updateTimerSeconds(),
      NULL: () => null,
    }

    return actions[currentElement.dataset.feature ?? 'NULL']?.()
  }

  noteTypesHandler = (noteTypes: Array<NoteConfiguration>) => {
    this.activitiesMessage.data = this.props.activities.map((activity) => {
      if (activity.meta.id === this.state.openedActivity)
        activity.noteTypes = noteTypes
      return activity
    })

    this.props.onChangeActivities({
      activities: this.activitiesMessage.data,
      onGoingStep: 'activities changed',
    })

    parent.postMessage({ pluginMessage: this.activitiesMessage }, '*')
  }

  // Render
  render() {
    let fragment

    switch (this.state.view) {
      case 'ACTIVITIES': {
        fragment = (
          <ActivitiesList
            {...this.props}
            onChangeActivities={this.activitiesHandler}
            onOpenActivitySettings={(e) =>
              this.setState({
                view: 'SETTINGS',
                openedActivity: e,
              })
            }
          />
        )
        break
      }
      case 'SETTINGS': {
        fragment = (
          <Settings
            activity={
              this.props.activities.find(
                (activity) => activity.meta.id === this.state.openedActivity
              ) as ActivityConfiguration
            }
            {...this.props}
            onChangeActivities={this.activitiesHandler}
            onChangeNoteTypes={this.noteTypesHandler}
            onCloseActivitySettings={() =>
              this.setState({
                view: 'ACTIVITIES',
                openedActivity: undefined,
              })
            }
          />
        )
        break
      }
    }

    return <div className="controls__control">{fragment}</div>
  }
}
