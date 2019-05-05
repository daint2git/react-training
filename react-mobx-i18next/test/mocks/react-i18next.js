const reactI18next = jest.genMockFromModule('react-i18next')

// this mock makes sure any components using the withTranslation HoC receive the t function as a prop
reactI18next.withTranslation = () => Component => props => (
  <Component t={k => `t('${k}')`} {...props} />
)

module.exports = reactI18next

// module.exports = {
//   withTranslation: () => Component => props => <Component t={k => `t('${k}')`} {...props} />,
// }
