import TemplateTag from 'common-tags/es/TemplateTag'

const cssModuleNameTag = styles => {
  const localClass = key => styles[key] || key

  return new TemplateTag({
    onSubstitution(substitution) {
      return substitution || ''
    },

    onEndResult(endResult) {
      if (endResult.length === 0) return null
      return endResult
        .split(' ')
        .reduce((result, key) => `${result} ${localClass(key)}`, '')
        .trim()
    },
  })
}

export default cssModuleNameTag
