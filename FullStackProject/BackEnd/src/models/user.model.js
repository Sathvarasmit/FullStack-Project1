import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: Srting, //cloudinary Url
      required: true,
    },
    converImage: {
      type: Srting, //cloudinary
    },
    watchHistory: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.comapare(password, this.password)
}

userSchema.methods.generateAccessToken = function() {
    jwt.sign(
        {
            _id : this._id,
            email : this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}


userSchema.methods.generateRefreshToken = function() {
    jwt.sign(
        {
            _id : this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
export const User = mongoose.model("User", userSchema); 

























//in this pre is hook comes fro mongoose there is lot of other hooks what this hook does is it runs before save anything at here we used for passed that save is tell mongoose when to run at here before save there is more like delete findone deleteone 

// These are the most used ones! 🎯

// ## pre hooks — before operation

// ```js
// // most used!
// userSchema.pre("save", ...)        // before saving
// userSchema.pre("findOneAndUpdate") // before updating
// userSchema.pre("deleteOne", ...)   // before deleting
// ```

// ---

// ## post hooks — after operation

// ```js
// // runs after operation done
// userSchema.post("save", ...)       // after saving
// userSchema.post("find", ...)       // after finding
// ```

// ---

// ## methods — custom methods on document

// ```js
// // on single document
// userSchema.methods.isPasswordCorrect = function() {}
// userSchema.methods.generateToken = function() {}
// ```

// ---

// ## statics — custom methods on model

// ```js
// // on whole model
// userSchema.statics.findByEmail = function(email) {
//     return this.findOne({ email })
// }

// // use like this
// User.findByEmail("john@gmail.com") ✅
// ```

// ---

// ## virtuals — calculated fields

// ```js
// // field that doesn't save in db but you can use
// userSchema.virtual("fullName").get(function() {
//     return this.firstName + " " + this.lastName
// })
// ```

// ---

// ## Simple rule — what you will use 90% of time

// ```
// pre("save")          → hashing, formatting before save
// pre("findOneAndUpdate") → before update
// methods              → custom document methods
// statics              → custom model methods
// virtuals             → calculated fields
// ```

// **These 5 cover almost everything in real projects!** 🎯