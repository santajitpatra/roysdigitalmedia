import ContactDetalis from "../../../components/ContactDetalis";
import MessageForm from "../../../components/MessageForm";


export default function Contact() {
  return (
    <div className='bg-primary'>
      <div className='flex flex-col md:flex-row px-10 py-20'>
        <ContactDetalis />
        <MessageForm />
      </div>
    </div>
  )
}
