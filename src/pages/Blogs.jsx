import ReactPlayer from 'react-player';
import './../video/video-advertising-coffee.mp4';


const Blogs = () => {
    return (
        <div>
            <ReactPlayer 
                url={`https://youtu.be/dpKCvSx0UCs`}
                playing={true}
                controls="true"
            />
        </div>
    );
}
 
export default Blogs;