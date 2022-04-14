import { SettingsBodyTabs } from './SettingsBodyTabs';

export const SettingsBody = () => {
    return (
        <div className="settings_body-main">

            <div className="settings_body-tabs">
                <SettingsBodyTabs />
            </div>

            <div className="settings_body-content">
                {/* { 
                   redirectComponent()
                } */}
                <p>Body</p>
            </div>

            
        </div>
    )
}
