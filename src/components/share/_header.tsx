
import { _title } from './title'


export const _header = () => {
    return (
        <div className='flex font-bold text-xl bg-white justify-between p-0'>
            <div className='flex w-24 justify-center'>
                {/* <InstagramOutlined className='text-4xl' /> */}
            </div>
            <div className='flex-auto'>
                <button type='submit'>
                    <_title id={'fun1'}></_title>
                </button>
                <button type="submit">Primary</button>
                <button type="submit">Primary</button>
                <button type="submit">Primary</button>
            </div>
            <div className='flex'>
                <button type="submit">Primary</button>
                <button type="submit">Primary</button>

            </div>
        
        </div>
    )
}
