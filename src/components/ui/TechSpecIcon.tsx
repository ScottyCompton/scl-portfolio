import { TechSpec } from '@/types'

const TechSpecIcon = ({
    techSpec,
    size = 'fa-sm',
}: {
    techSpec: TechSpec
    size?: string
}) => {
    const { title } = techSpec

    return <span className="tech-spec-title">{title}</span>
}

export default TechSpecIcon
