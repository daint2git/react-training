import { hot } from 'react-hot-loader'

import BasicRouting from 'components/BasicRouting'
import CustomLink from 'components/CustomLink'
import NestedRouting from 'components/NestedRouting'
import URLParameters from 'components/URLParameters'
import SwitchRoute from 'components/SwitchRoute'
import Scroll from 'components/Scroll'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './Root.scss'

const cssModules = cssModuleNameTag(styles)

const Spacer = () => <div className={cssModules`spacer`} />

const Root = () => (
  <div className={cssModules`root`}>
    {/* <BasicRouting />
    <Spacer />
    <CustomLink />
    <Spacer />
    <NestedRouting />
    <Spacer />
    <URLParameters />
    <Spacer />
    <SwitchRoute /> */}
    <Scroll />
  </div>
)

export default hot(module)(Root)
