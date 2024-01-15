
import { Button } from '../../atoms/button/Button'
import { Text } from '../../atoms/text/Text'
import { DownloadLinkButton } from '../../atoms/link/DownloadLink'

import './profileOptions.css'

export const ProfileOptions = () => {
    return (
        <div className="profile-options">
            <Button style="primary-btn">
                <Text text="Detalle" />
            </Button>
            <DownloadLinkButton>
                <Button style="highlighted-btn ">
                    <Text text="Descargar CV" />
                </Button>
            </DownloadLinkButton>
        </div>
    )
}