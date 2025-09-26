
// id va array qabul qilib , id bo'yicha arraydan ma'lumotni topib beradi.
export const inArray = (id:string , data:any) => {
    let filteredEl =  data.find((el:any) => el.id == id )
    if(filteredEl){
        return {  data:filteredEl }
    }else{
        return { message:`${id} bo'yicha maxsulot topilmadi:(` }
    }

} 
