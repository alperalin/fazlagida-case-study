// Imports
import { Link } from 'react-router-dom';

// Styles
import './Logo.scss';

// Element
function Logo() {
  return (
    <div className="logo">
      <Link className="logo__url" to="/">
        <svg
          className="logo__icon"
          width="32px"
          height="32px"
          viewBox="0 0 48 48"
        >
          <g>
            <g>
              <g>
                <path d="M35,48H13c-2.757,0-5-2.243-5-5V5c0-2.757,2.243-5,5-5h22c2.757,0,5,2.243,5,5v38C40,45.757,37.757,48,35,48z M13,2     c-1.654,0-3,1.346-3,3v38c0,1.654,1.346,3,3,3h22c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3H13z" />
              </g>
              <g>
                <path d="M35,22H13c-0.552,0-1-0.448-1-1V5c0-0.552,0.448-1,1-1h22c0.552,0,1,0.448,1,1v16C36,21.552,35.552,22,35,22z M14,20h20     V6H14V20z" />
              </g>
              <g>
                <path d="M24,44c-5.514,0-10-4.486-10-10s4.486-10,10-10s10,4.486,10,10S29.514,44,24,44z M24,26c-4.411,0-8,3.589-8,8     s3.589,8,8,8s8-3.589,8-8S28.411,26,24,26z" />
              </g>
              <g>
                <path d="M24,40c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S27.309,40,24,40z M24,30c-2.206,0-4,1.794-4,4s1.794,4,4,4     s4-1.794,4-4S26.206,30,24,30z" />
              </g>
            </g>
          </g>
        </svg>
        <h1 className="logo__text">Music App</h1>
      </Link>
    </div>
  );
}

export default Logo;
