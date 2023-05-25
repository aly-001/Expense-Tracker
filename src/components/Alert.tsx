// we need to be able to dynamically provide the text
// for this, let's define the shape of the props class as an interface:

import { ReactNode } from "react"

/* interface Props {
    text: string;
} */

// Let's use the 'children' variable to be able to use childen: <Alert>some children</Alert>

/* interface Props {
    children: string;
} */

// Almost there! Now, let's change the type of 'children' so we can have markup as children.

interface Props {
    children: ReactNode
}

// Let's pass a Props-able to our Alert function
const Alert = ( { children } : Props) => {
  return (
    <div className="alert alert-primary">{ children }</div>
  )
}

export default Alert