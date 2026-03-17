/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  const action: ResourceRequest = {
    name: "action",
    url: "",
    searchParams: [
    ],
    method: "post",
    headers: [
      { name: "Content-Type", value: "application/json" },
    ],
  }
  const _data = new Map<string, ResourceRequest>([
  ])
  const _action = new Map<string, ResourceRequest>([
    ["action", action],
  ])
  return { data: _data, action: _action }
}


      export const getPageMeta = ({
  system,
  resources,
}: {
  system: System;
  resources: Record<string, any>;
}): PageMeta => {
  return {
    title: "mudbourn's minecraft server",
    description: "New members' setup guide website.",
    excludePageFromSearch: undefined,
    language: undefined,
    socialImageAssetName: "IMG_0495_z1NthrmWMRK1Mh2lUstXB.jpg",
    socialImageUrl: undefined,
    status: undefined,
    redirect: undefined,
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}


      export const contactEmail = "howell.iliyas@gmail.com";
    