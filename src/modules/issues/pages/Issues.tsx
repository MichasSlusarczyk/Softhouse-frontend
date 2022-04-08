import { Breadcrumbs } from 'shared/components'
import { useTranslation } from 'react-i18next'
import { MODULE_NAME } from '../strings'

const Issues = () => {
  const { t } = useTranslation(MODULE_NAME)
  return (
    <>
      <Breadcrumbs items={[t('breadcrumbs.root')]} />
      <div>{t('issues.message')}</div>
    </>
  )
}

export default Issues
