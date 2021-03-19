
import {
    useParams,
  } from 'react-router-dom';
  
export default function ResultPage() {

    let { sd } = useParams();

    // do sanity check before proceeding
  
    return (
      <><div>
        <h3>Info loading... {sd}</h3>
      </div>
      <script async src="https://comments.app/js/widget.js?3" data-comments-app-website="Jy7bHnpa" data-limit="50"></script>
      </>
    );
  }