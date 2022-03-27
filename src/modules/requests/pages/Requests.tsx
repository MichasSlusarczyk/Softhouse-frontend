import { useTranslation } from 'react-i18next'
import { Breadcrumbs } from 'shared/components'
import { MODULE_NAME } from '../strings'

const Requests = () => {
  const { t } = useTranslation(MODULE_NAME)

  return (
    <>
      <Breadcrumbs items={[t('breadcrumbs.root')]} />
      <div>{t('requests.message')}</div>
    </>
  )
}

export default Requests
