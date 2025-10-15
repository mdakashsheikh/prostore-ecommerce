import Image from "next/image";
import loader from '@/assets/loader.gif'

const LoadingPage = () => {
    return ( 
        <div 
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw'
            }}
            // className="flex flex-row min-h-screen justify-center items-center"
        >
            <Image src={loader} height={150} width={150} alt="Loading..."/>
        </div> 
    );
}
 
export default LoadingPage;