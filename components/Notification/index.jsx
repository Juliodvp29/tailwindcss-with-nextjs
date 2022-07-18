import Bubble from '../Icons/Bubble';
export default function Notification (){
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 ">
    <div className="shrink-0">
      <picture className='h-12 w-12 '>
      <Bubble />
      </picture>
    </div>
    <div>
      <h4 className="text-xl font-mediun text-black">ChitChat</h4>
      <p className="text-slate-500">You have a new message!</p>
    </div>
  </div>
    )
}