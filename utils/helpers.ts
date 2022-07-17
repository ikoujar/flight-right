import { identity, pickBy } from "lodash";

export function cleanQueryParams(params: any): any {
    return pickBy({
        ...params
    }, identity)
}
