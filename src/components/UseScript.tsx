import { LinkedinShareButton } from 'react-share';
import { AiFillLinkedin } from 'react-icons/ai';

const ShareButtons = ({ repoId }) => {
  return (
    <div>
      <LinkedinShareButton
        url={`www.ihatereading.in/createrepo?framework=Create-React-App&repoId=${repoId}`}
        title="Check out this iHateReading custom repository "
      >
        <AiFillLinkedin style={{ opacity: '0.5'}} size={18} />
      </LinkedinShareButton>
    </div>
  )
}
export default ShareButtons
