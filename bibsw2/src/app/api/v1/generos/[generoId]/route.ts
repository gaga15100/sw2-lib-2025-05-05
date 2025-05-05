import { parseAppSegmentConfig } from "next/dist/build/segment-config/app/app-segment-config";
import { NextApiResponse, NextResponse } from "next/server";

export asyc function GET(request : Request, context : any) {
    return NextResponse.json({"param" : params.generoId});
}