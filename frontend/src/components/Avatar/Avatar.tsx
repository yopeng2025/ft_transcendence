import './Avatar.css'
import defaultAvatar from '../../assets/default-avatar.jpg'

type AvatarProps = {
	src?: string | null
	size?: number
	alt?: string
}

function Avatar({ src, size = 50, alt = 'Avatar' }: AvatarProps) {
    return (
        <img
            src={src || defaultAvatar}
            alt={alt}
            width={size}
            height={size}
            className="avatar"
        />
    )
}

export default Avatar