
import UrbanPlanners, {
    postMeta as urbanPlannersMeta
} from "./UrbanPlanners.jsx"

import MycologicalPath, {
    postMeta as mycologicalPathMeta
} from "./MycologicalPath.jsx"

export const posts = [ 
    {
        ...mycologicalPathMeta,
        component: MycologicalPath,

    },
    {
        ...urbanPlannersMeta,
        component: UrbanPlanners,
    }

]
