export type Priority = '1' | '2' | '3'

export type Status = 'incomplete' | 'complete'

export type Todo = {
    "priority": Priority,
    "created_at": number,
    "id": string,
    "title": string,
    "status": Status
}
