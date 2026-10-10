import defaultAvatar from '../../assets/default-avatar.jpg'

const avatarClass = "rounded-full object-cover border-2 border-brand"

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
            className={avatarClass}
        />
    )
}

export default Avatar
