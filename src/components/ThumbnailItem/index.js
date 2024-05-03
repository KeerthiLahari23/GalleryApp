// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, setactivateThumbnail, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails
  const isActiveClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickThumbnail = () => {
    setactivateThumbnail(id)
  }
  return (
    <li className="list-items">
      <button type="button" onClick={onClickThumbnail} className="btn">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={isActiveClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
