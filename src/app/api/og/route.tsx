import { type NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import WomanTechnologist from "$/assets/images/emojis/woman-technologist.svg";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const imageUrl =
      searchParams.get("image") ?? `https://cordor.dev${WomanTechnologist}`;
    const title = searchParams.get("title")?.slice(0, 100);
    const backgroundColor = searchParams.get("backgroundColor") ?? "black";
    const backgroundEnabled =
      searchParams.get("backgroundEnabled") ?? "true" === "true";
    const fontColor = searchParams.get("fontColor") ?? "white";

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: backgroundEnabled ? backgroundColor : undefined,
            backgroundSize: "150px 150px",
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Profile Picture"
              height={200}
              width={200}
              src={imageUrl}
              style={{ margin: "0 30px" }}
            />
          </div>
          {title && (
            <div
              style={{
                fontSize: 60,
                fontStyle: "normal",
                letterSpacing: "-0.025em",
                color: fontColor,
                marginTop: 30,
                padding: "0 120px",
                lineHeight: 1.4,
                whiteSpace: "pre-wrap",
              }}
            >
              {title}
            </div>
          )}
        </div>
      ),
      {
        width: 1200,
        height: 630,
        emoji: "twemoji",
      },
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    if ("message" in e && typeof e.message === "string") {
      console.error(`${e.message}`);
    }

    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
