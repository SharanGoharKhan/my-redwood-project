import { Form, TextField } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

const ContactPage = () => {
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Form>
        <TextField name="name" />
        <TextField name="email" />
        <TextField name="message" />
      </Form>
    </>
  )
}

export default ContactPage
