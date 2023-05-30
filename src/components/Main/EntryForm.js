 import './EntryForm.css'

export default function EntryForm ({legendName, legendName2}){
    return(
    <>
  <h2 className='EntryForm-h2'>NEW ENTRY</h2>
        <form  className='EntryForm-form'>
        <label className='label-legendName'>{legendName}</label>
        <textarea className='EntryForm-textarea'></textarea>
        <label className='label-legendName2'>{legendName2}</label>
        <textarea className='EntryForm-textarea2'></textarea>
        <button className='EntryForm-button'>Create</button>
    </form>
    </>
    )
}