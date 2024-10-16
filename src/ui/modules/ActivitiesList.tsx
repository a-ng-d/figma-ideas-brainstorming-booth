import {
  ActionsItem,
  Button,
  ConsentConfiguration,
  SectionTitle,
  SimpleItem,
  texts,
} from '@a_ng_d/figmug-ui'
import React from 'react'
import { locals } from '../../content/locals'
import { Language, PlanStatus } from '../../types/app'
import {
  ActivityConfiguration,
  UserConfiguration,
} from '../../types/configurations'
import { UserSession } from '../../types/user'
import features from '../../utils/config'
import isBlocked from '../../utils/isBlocked'
import { AppStates } from '../App'
import Feature from '../components/Feature'

interface ActivitiesListProps {
  activities: Array<ActivityConfiguration>
  userSession: UserSession
  userConsent: Array<ConsentConfiguration>
  userIdentity: UserConfiguration
  planStatus: PlanStatus
  lang: Language
  onChangeActivities: React.Dispatch<Partial<AppStates>>
  onOpenActivitySettings: (id: string) => void
  onRunSession: (id: string) => void
}

export default class ActivitiesList extends React.Component<ActivitiesListProps> {
  // Render
  render() {
    return (
      <div className="control__block control__block--list">
        <SimpleItem
          leftPartSlot={
            <SectionTitle
              label={locals[this.props.lang].activities.title}
              indicator={this.props.activities.length}
            />
          }
          rightPartSlot={
            <Feature
              isActive={
                features.find((feature) => feature.name === 'ACTIVITIES_ADD')
                  ?.isActive
              }
            >
              <Button
                type="icon"
                icon="plus"
                feature="ADD_ACTIVITY"
                isBlocked={isBlocked('ACTIVITIES_ADD', this.props.planStatus)}
                isNew={
                  features.find((feature) => feature.name === 'ACTIVITIES_ADD')
                    ?.isNew
                }
                action={this.props.onChangeActivities}
              />
            </Feature>
          }
        />
        <ul className="rich-list">
          {this.props.activities.map(
            (activity: ActivityConfiguration, index) => (
              <ActionsItem
                key={index}
                id={activity.meta.id}
                name={activity.name}
                description={activity.description}
                complementSlot={
                  <div
                    style={{
                      display: 'flex',
                      gap: 'var(--size-xxsmall)',
                    }}
                  >
                    {activity.types.map((type, index) => (
                      <div
                        key={index}
                        className="color-chip"
                        style={{
                          backgroundColor: type.hex,
                        }}
                      />
                    ))}
                  </div>
                }
                actionsSlot={
                  <>
                    <span
                      className={`${texts.type} ${texts['type--secondary']} type`}
                    >
                      {String(activity.timer.minutes).padStart(2, '0') +
                        ':' +
                        String(activity.timer.seconds).padStart(2, '0')}
                    </span>
                    <Feature
                      isActive={
                        features.find(
                          (feature) => feature.name === 'ACTIVITIES_SETTINGS'
                        )?.isActive
                      }
                    >
                      <Button
                        type="icon"
                        icon="adjust"
                        feature="CONFIGURE_ACTIVITY"
                        isBlocked={isBlocked(
                          'ACTIVITIES_SETTINGS',
                          this.props.planStatus
                        )}
                        isNew={
                          features.find(
                            (feature) => feature.name === 'ACTIVITIES_SETTINGS'
                          )?.isNew
                        }
                        action={() =>
                          this.props.onOpenActivitySettings(activity.meta.id)
                        }
                      />
                    </Feature>
                    <Feature
                      isActive={
                        features.find(
                          (feature) => feature.name === 'SESSIONS_RUN'
                        )?.isActive
                      }
                    >
                      <Button
                        type="icon"
                        icon="play"
                        feature="RUN_ACTIVITY"
                        isBlocked={isBlocked(
                          'SESSIONS_RUN',
                          this.props.planStatus
                        )}
                        isNew={
                          features.find(
                            (feature) => feature.name === 'SESSIONS_RUN'
                          )?.isNew
                        }
                        action={() => this.props.onRunSession(activity.meta.id)}
                      />
                    </Feature>
                  </>
                }
              />
            )
          )}
        </ul>
      </div>
    )
  }
}
