export interface group_detail{
    "id": number ,
    "url": string,
    "admin_name": string,
    "total_members" : number,
    "user_set": [
        {
            "id": number,
            "url_for_detail_view": string,
            "user_name_for_profile": {
                "profile_photo": string,
                "created_date": string,
                "user": number
            },
            "username": string,
            "first_name": string,
            "last_name": string
        }
    ],
    "name": string,
    "Admin_id": number
}