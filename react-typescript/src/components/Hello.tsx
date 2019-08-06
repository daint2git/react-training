import React from 'react'

interface HelloProps {
  compiler: string
  framework: string
  bundler: string
}

const Hello = ({ compiler, framework, bundler }: HelloProps): JSX.Element => (
  <h1>{`Hello from ${compiler}, ${framework} and ${bundler} !`}</h1>
)

export default Hello
