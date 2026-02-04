
export const fetchAllStats = async(request, response,next) => {
    try {
        
    } catch (error) {
        console.error(` : ${error.message}`);
        next(error);
    }
}