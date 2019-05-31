import TemplateTag from 'common-tags/es/TemplateTag'

const cssModuleNameTag = styles => {
  const className = (key = '') => styles[key] || key

  return new TemplateTag({
    onSubstitution(substitution) {
      return substitution || ''
    },

    onEndResult(endResult) {
      return endResult.length === 0
        ? null
        : endResult
            .split(' ')
            .reduce((result, key) => `${result} ${className(key)}`, '')
            .trim()
    },
  })
}

export default cssModuleNameTag
