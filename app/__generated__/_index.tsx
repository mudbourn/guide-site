/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Body as Body, Link as Link, Form as Form } from "@webstudio-is/sdk-components-react-router";
import { Box as Box, Heading as Heading, Text as Text, Paragraph as Paragraph, Image as Image, Input as Input } from "@webstudio-is/sdk-components-react";


      export const projectId = "19eb339a-c9ee-4be8-a7b0-81dc46b6c4e3";

      export const lastPublished = "2026-03-11T22:22:45.915Z";

      export const siteName = undefined;

      export const breakpoints = [{"id":"nPRfowgVeU1-_R-igzAvZ"},{"id":"2KmmbyzrN_rWr7DmL1Up1","maxWidth":991},{"id":"eHt2503ieUAbafQHljIWW","maxWidth":767},{"id":"vyfqHPpV8NskNM5lQJBhR","maxWidth":479},{"id":"63dc0cd627f19700082762ae","minWidth":1024}];

      export const favIconAsset: string | undefined =
        "server-icon_xnHvB9lhMNbtrMgCgGtXn_kVcPpz1JILtdUZ7wm2GMA.png";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        ["BricolageGrotesque-VariableFont_opsz_wdth_wght_02oMRdjqVqw6czlsLz_3e.ttf"]

      export const pageBackgroundImageAssets: string[] =
        []

      
            

            export const CustomCode = () => {
              return (<></>);
            }
          

      const Page = (_props: { system: any; }) => {
let [formState, set$formState] = useVariableState<any>("initial")
return <Body
className={`w-element`}>
<Box
className={`w-box w-main`}>
<Box
className={`w-box w-black-background`} />
<Box
className={`w-box w-card`}>
<Box
id={"submit"}
className={`w-box w-colour-background`}>
<Box
className={`w-box w-name-handle`}>
<Heading
className={`w-heading w-heading-1`}>
{"mudbourn's minecraft server (MMS)"}
</Heading>
<Text
className={`w-text w-text-1`}>
{"mc.nudbourn.info"}
</Text>
</Box>
<Box
className={`w-box w-information`}>
<Paragraph
className={`w-paragraph w-paragraph-1`}>
{"Fabric (Java Edition) 1.21.11"}
</Paragraph>
</Box>
<Paragraph
className={`w-paragraph w-paragraph-2`}>
{"NOTE: "}
{""}
<br />
{""}
{"MMS uses a whitelist system. Submit your"}
{""}
<br />
{""}
{"username to request permission to join."}
</Paragraph>
<Form
state={formState}
onStateChange={(state: any) => {
formState = state
set$formState(formState)
}}
action={"action"}
className={`w-webhook-form w-webhook-form-1`}>
{(formState === 'initial' || formState === 'error') &&
<div
className={`w-element w-form-content`}>
<label
className={`w-element w-element-9`}>
{"Name"}
</label>
<Input
name={"name"}
placeholder={"Enter Name"}
className={`w-element w-element-10`} />
<label
className={`w-element w-element-11`}>
{"Username"}
</label>
<Input
name={"email"}
placeholder={"Enter Username"}
className={`w-element w-element-12`} />
<button
type={"submit"}
className={`w-element w-element-13`}>
{"Submit"}
</button>
</div>
}
{(formState === 'success') &&
<div
className={`w-element w-success-message`}>
{"Your request has been submitted."}
<br />
{""}
<br />
{"Feel free to join the discord "}
{""}
<br />
{""}
{"server to keep in touch."}
<br />
{""}
<Link
className={`w-element w-element-15`}>
{"https://discord.gg/XzBB2cnjp2"}
</Link>
</div>
}
{(formState === 'error') &&
<div
className={`w-element w-error-message`}>
{"Sorry, something went wrong."}
{""}
<br />
{""}
{""}
<br />
{"Join the discord to submit manually."}
<br />
{""}
<Link
className={`w-element w-element-14`}>
{"https://discord.gg/XzBB2cnjp2"}
</Link>
</div>
}
</Form>
<h1
className={`w-element w-h1`}>
{"Client Setup Guide"}
</h1>
<Box
className={`w-box w-information-1`}>
<Paragraph
className={`w-paragraph w-paragraph-3`}>
{"Download the client zip file from the "}
{""}
<br />
{""}
<Link
href={"https://drive.google.com/file/d/1hHmpLc4JCwRKqh_VIxKFox5fcixOAgUC/view?usp=drive_link"}
className={`w-element w-element-7`}>
{"Google Drive folder"}
</Link>
{"."}
</Paragraph>
<Box
className={`w-box w-box-1`}>
<Image
src={"/assets/CleanShot_2026-03-11_at_05.42.25_2x_wVKkdSIUOGE3z_7XAUgZw.png"}
width={1220}
height={792}
alt={""}
loading={"eager"}
className={`w-image w-image-1`} />
</Box>
<Paragraph
className={`w-paragraph w-paragraph-4`}>
{"Download and install ATLauncher fromtheir "}
{""}
<br />
{""}
<Link
href={"https://atlauncher.com/downloads"}
className={`w-element w-element-8`}>
{"official website"}
</Link>
{"."}
</Paragraph>
<Box
className={`w-box w-box-2`}>
<Image
src={"/assets/CleanShot_2026-03-11_at_05.43.20_2x_hRFU8UpMlzuD7s44J29ke.png"}
width={3114}
height={2022}
alt={""}
loading={"eager"}
className={`w-image w-image-2`} />
</Box>
<Paragraph
className={`w-paragraph w-paragraph-5`}>
{"Open ATLauncher."}
</Paragraph>
<Box
className={`w-box w-box-3`}>
<Image
src={"/assets/CleanShot_2026-03-11_at_05.43.55_2x_hYv9Yl7vAXXQ0EEwqvbFU.png"}
width={3420}
height={2224}
alt={""}
loading={"eager"}
className={`w-image w-image-3`} />
</Box>
<Paragraph
className={`w-paragraph w-paragraph-6`}>
{"Click \"Instances\" on the right hand side."}
</Paragraph>
<Box
className={`w-box w-box-4`}>
<Image
src={"/assets/CleanShot_2026-03-11_at_05.44.09_2_2x_nXgrEdEZRaOu_j1K1EpGG.png"}
width={806}
height={522}
alt={""}
loading={"eager"}
className={`w-image w-image-4`} />
</Box>
<Paragraph
className={`w-paragraph w-paragraph-7`}>
{"At the top left of the screen, click import."}
</Paragraph>
<Box
className={`w-box w-box-5`}>
<Image
src={"/assets/CleanShot_2026-03-11_at_05.46.21_2x_-9d5KRIBtnBjswM0uuxbY.png"}
width={672}
height={436}
alt={""}
loading={"eager"}
className={`w-image w-image-5`} />
</Box>
<Paragraph
className={`w-paragraph w-paragraph-8`}>
{"Select browse, then navigate to where "}
{""}
<br />
{""}
{"the downloaded zip file is and import it. "}
</Paragraph>
<Box
className={`w-box w-box-6`}>
<Image
src={"/assets/CleanShot_2026-03-11_at_05.46.58_2x_Yt86QLyecIQa0WUnhEKze.png"}
width={746}
height={484}
alt={""}
loading={"eager"}
className={`w-image w-image-6`} />
</Box>
<Paragraph
className={`w-paragraph w-paragraph-9`}>
{"It is recommended to change the name to"}
{""}
<br />
{""}
{"\"MMS-AT-\" immediately followed by the"}
{""}
<br />
{""}
{"version of the zip file you downloaded"}
{""}
<br />
{""}
{"(for example: \"MMS-AT-2.1\")"}
</Paragraph>
<Box
className={`w-box w-box-7`}>
<Image
src={"/assets/CleanShot_2026-03-11_at_05.47.39_2x_4UmzaNCs2jIQXkcXw9p2O.png"}
width={934}
height={606}
alt={""}
loading={"eager"}
className={`w-image w-image-7`} />
</Box>
<Paragraph
className={`w-paragraph w-paragraph-10`}>
{"Once the import is complete, navigate to the"}
{""}
<br />
{""}
{"Accounts tab and log into your Minecraft "}
{""}
<br />
{""}
{"account if you haven't already done so"}
</Paragraph>
<Box
className={`w-box w-box-8`}>
<Image
src={"/assets/CleanShot_2026-03-11_at_05.48.32_2x_amQHipSDfP2eVCSN_Ijgg.png"}
width={2432}
height={1578}
alt={""}
loading={"eager"}
className={`w-image w-image-8`} />
</Box>
<Paragraph
className={`w-paragraph w-paragraph-11`}>
{"Run the instance by pressing play."}
</Paragraph>
<Box
className={`w-box w-box-9`}>
<Image
src={"/assets/CleanShot_2026-03-11_at_05.50.14_2x_h7fX5y1XQmn2o_l9h-PsD.png"}
width={818}
height={530}
alt={""}
loading={"eager"}
className={`w-image w-image-9`} />
</Box>
</Box>
</Box>
</Box>
</Box>
</Body>
}


      export { Page }
    