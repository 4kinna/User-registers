import { User } from "./User";

export interface Userlist {
  //skapar array med namnet Users av typen User
  Users: User[];
}

export const allUsers: Userlist = {
  Users: [
    {
      profilePicture:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FC4D03AQEloUupbJOUlw%2Fprofile-displayphoto-shrink_200_200%2F0%2F1560311487708%3Fe%3D1622073600%26v%3Dbeta%26t%3DY1ZafnMbE9xp5luvZLqut1qAbK5jj8h2rjGjWuxm1KA&imgrefurl=https%3A%2F%2Fse.linkedin.com%2Fin%2Fanton-st%25C3%25A5lhandske-191b91188&tbnid=JKQG2_5XUxKOOM&vet=12ahUKEwjUuKKesorwAhUMxyoKHYYIAYIQMygAegQIARA7..i&docid=4UlauI9F-DfNgM&w=200&h=200&q=anton%20st%C3%A5lhandske&ved=2ahUKEwjUuKKesorwAhUMxyoKHYYIAYIQMygAegQIARA7",
      name: "Anton Stålhandske",
      companyName: "Green Adviser",
      email: "AntonStalhandske@greenadviser.se",
      phoneNumber: "0700000000",
    },
    {
      profilePicture:
        "https://www.google.com/search?q=victor+h%C3%A5kansson+green+adviser&sxsrf=ALeKk00HGWR6fMaKIdSE_mlRVnoPyPbWIg:1618838547530&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiCrsvEs4rwAhXdisMKHYXZA1EQ_AUoAXoECAEQAw&biw=1920&bih=880#imgrc=lGyhjBYCb1RNtM",
      name: "Victor Håkansson",
      companyName: "Green Adviser",
      email: "Victorhakansson@greenadviser.com",
      phoneNumber: "0700000000",
    },
    {
      profilePicture:
        "https://images.squarespace-cdn.com/content/v1/5e998f1cca50eb55cf5cdab5/1592731964982-DN96HVAQSW7BQ9S7HAKP/ke17ZwdGBToddI8pDm48kJKo3YTR7zgUvInmXMbZ6zZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0geeCvn1f36QDdcifB7yxGjTk-SMFplgtEhJ5kBshkhu5q5viBDDnY2i_eu2ZnquSA/104675344_257794162144926_3397574426109829466_n.jpg",
      name: "Ted Nilsson",
      companyName: "Green Adviser",
      email: "tednilsson@greenadviser.com",
      phoneNumber: "0700000000",
    },
  ],
};
