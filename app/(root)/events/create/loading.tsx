import Image from "next/image";

const Loading = () => {
    return (
        <div className='w-full min-h-screen flex items-center justify-center z-20'>
            <Image
                src='/assets/icons/loader.svg'
                width={50}
                height={50}
                alt='loader'
                className='object-contain'
            />
        </div>
    );
};

export default Loading;