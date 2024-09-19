import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { postModal } from "@/lib/postModal";

const loadDb = async () => {
  await connectDB();
};
loadDb();

// Data Get Endpoint
export async function GET(req) {
  const posts = await postModal.find({})
  return NextResponse.json(posts);
}


// Data Post Endpoint
export async function POST(req) {
  const fromData = await req.formData()

  const newPost ={
    title: fromData.get("title"),
    description: fromData.get("description")
  }

  postModal.create(newPost)

  return NextResponse.json({success: true, msg:'sms sended'})
}

// Data Delete Endpoint
export async function DELETE(req) {
  try {
    // Parse the URL to get the ID from the query parameters
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, msg: "Post ID not provided" }, { status: 400 });
    }

    // Find and delete the post with the given ID
    const deletedPost = await postModal.findByIdAndDelete(id);

    if (!deletedPost) {
      return NextResponse.json({ success: false, msg: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, msg: "Post deleted successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, msg: error.message }, { status: 500 });
  }
}
