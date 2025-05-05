import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// configure Server
const app = express();

// middleare
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://attendance-management-system-ten.vercel.app" ],
  })
);

// Database connection
try {
  mongoose.connect(
    "mongodb+srv://newsunm4:ztu5QJxAN0suLqMg@cluster0.5ewctwg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("Database connected successfully.");
} catch (error) {
  console.log("Could not connect to the database", error);
}

// make the Attendance schema
const attendanceSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  time: { type: String, required: true },
});

// make the table
const Attendance = mongoose.model("Attendance", attendanceSchema);

// 1. Create attendance
app.post("/create-attendance", async (req, res) => {
  try {
    const newlyCreatedAttendance = await Attendance.create(req.body);
    return res.status(201).json({
      sucess: true,
      msg: "Your attendance has been recorded",
      data: newlyCreatedAttendance,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error: error,
    });
  }
});

// 2. get all attendace
app.get("/get-all-attendance", async (req, res) => {
  try {
    const allAttendance = await Attendance.find();
    return res.status(200).json({
      success: true,
      msg: "All attendace fetched successfuly",
      data: allAttendance,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error: error,
    });
  }
});

// 3. Get single attendance
app.get("/get-single-attendance/:id", async (req, res) => {
  try {
    const singleAttendance = await Attendance.findById(req.params.id);

    if (!singleAttendance) {
      return res.status(404).json({
        success: false,
        msg: " The attendance you are looking does not exist",
        data: null,
      });
    }

    return res.status(200).json({
      sucess: true,
      msg: "Single attendance fetched successfully",
      data: singleAttendance,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error: error,
    });
  }
});

// 4. Update single attendance
app.patch("/update-single-attendance/:id", async (req, res) => {
  try {
    const updatedAttendance = await Attendance.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json({
      success: true,
      msg: "Your attendace has benn updated",
      data: updatedAttendance,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error: error,
    });
  }
});

// 5. Delete single attendance
app.delete("/delete-single-attendance/:id", async (req, res) => {
  try {
    const deletedAttendance = await Attendance.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      msg: "Your attendance has been deleted",
      data: deletedAttendance,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error: error,
    });
  }
});

// Expose the port
app.listen(5000, () => {
  console.log("server is running on port 5000");
});




// staff management 
// 