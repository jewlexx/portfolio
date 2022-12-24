use avgcol::AverageColor;
use neon::prelude::*;

/// Converts a url to an ico file to a png file
fn convert_url(mut cx: FunctionContext) -> JsResult<JsObject> {
    let arg = cx.argument::<JsString>(0)?;
    let url = arg.value(&mut cx);

    let average = smol::block_on(async move { AverageColor::from_url(url).await.unwrap() });

    let result = cx.empty_object();

    let colour_hex = format!("#{:02X}{:02X}{:02X}", average.0, average.1, average.2);

    let is_light = cx.boolean(average.is_light());
    let hex_string = cx.string(colour_hex);

    result.set(&mut cx, "colourHex", hex_string)?;
    result.set(&mut cx, "isLight", is_light)?;

    Ok(result)
}

#[neon::main]
fn main(mut cx: ModuleContext) -> NeonResult<()> {
    cx.export_function("convertUrl", convert_url)?;
    Ok(())
}
