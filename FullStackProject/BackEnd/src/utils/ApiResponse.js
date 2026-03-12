class ApiResponse {
    constructor(statusCode, data, message='Success') {
        this.statusCode = statusCode
        this.data = data
        this.message = message,
        this.success = statusCode<400
    }
}

export {ApiResponse}

// in this this.success should be true always but at here it checks two conditions first statusCode is less then 400 or not if it's a less thenn 400 it's true so this.sucess will be true too we are checking two things here okay