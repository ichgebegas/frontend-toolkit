"use client";

import { ContactMap } from "@opensite/ui/blocks/contact/contact-map";
import { demoFormEngineApi } from "@/lib/form-demo-data";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";
import { stadiaApiKey } from "@/lib/tools";
import type { FormFieldConfig } from "@opensite/ui";
import type { GeoMapMarker, GeoMapProps } from "@page-speed/maps";

const formFields: FormFieldConfig[] = [
  {
    name: "full_name",
    type: "text",
    label: "Full Name",
    placeholder: "Your name",
    required: true,
    columnSpan: 6,
  },
  {
    name: "email",
    type: "email",
    label: "Email Address",
    placeholder: "your@email.com",
    required: true,
    columnSpan: 6,
  },
  {
    name: "subject",
    type: "text",
    label: "Subject",
    placeholder: "Brief subject line",
    required: true,
    columnSpan: 12,
  },
  {
    name: "content",
    type: "textarea",
    label: "Message",
    placeholder: "Your message...",
    required: true,
    rows: 5,
    columnSpan: 12,
  },
];

const downtownPhoenixMarker: GeoMapMarker = {
  id: "downtown-phx-craft",
  latitude: 33.4585232,
  longitude: -112.0715382,
  pinColor: "#f97316",
  eyebrow: "Phoenix Flagship",
  title: "Downtown PHX Craft",
  summary:
    "A central downtown gathering space with elevated craft cocktails, chef-driven small plates, and late-night service.",
  locationLine: "128 E Roosevelt St, Phoenix, AZ 85004",
  locationUrl: "https://maps.app.goo.gl/D8XXe5tt7av4GFEh8",
  hoursLine: "Mon-Sun: 11:00 AM - 12:00 AM",
  mediaItems: [
    {
      id: "downtown-media-1",
      src: "https://toastability-production.s3.amazonaws.com/w87w0fyjdol9yzwo7yywkgxidvzo",
      alt: "Downtown PHX Craft signature espresso martini",
    },
  ],
  markerContentComponent: (
    <div className="mt-2 space-y-1.5 text-xs text-muted-foreground">
      <p className="font-medium text-foreground">Highlights</p>
      <ul className="list-disc space-y-1 pl-4">
        <li>Happy hour daily from 4 PM - 6 PM</li>
        <li>Private event lounge available</li>
        <li>Chef tasting menu on Fridays and Saturdays</li>
      </ul>
    </div>
  ),
  actions: [
    {
      label: "Directions",
      href: "https://maps.app.goo.gl/D8XXe5tt7av4GFEh8",
      icon: <DynamicIcon name="lucide/navigation" size={14} />,
      variant: "default",
      className: "shrink-0 flex-1 rounded-md",
      size: "md",
    },
    {
      href: "#",
      iconAfter: <DynamicIcon name="lucide/arrow-right" size={14} />,
      variant: "outline",
      size: "icon",
      className: "rounded-md",
    },
  ],
};

const northScottsdaleMarker: GeoMapMarker = {
  id: "north-scottsdale",
  latitude: 33.6510546,
  longitude: -111.924473,
  pinColor: "#0ea5e9",
  eyebrow: "Scottsdale Location",
  title: "North Scottsdale",
  summary:
    "A modern North Scottsdale location designed for group dining, premium cocktails, and weekend experiences.",
  locationLine: "17797 N Scottsdale Rd, Scottsdale, AZ 85255",
  hoursLine: "Mon-Sun: 10:00 AM - 11:00 PM",
  mediaItems: [
    {
      id: "scottsdale-media-1",
      src: "https://toastability-production.s3.amazonaws.com/e13qu3083lkhdg7th64vb628172a",
      alt: "North Scottsdale venue interior",
    },
    {
      id: "scottsdale-media-2",
      src: "https://cdn.ing/assets/i/r/289144/9thob27iku9i72elwvz5j03z6482/glamorous-nightlife-portrait-woman-burgundy-dress-upscale-bar.jpg",
      alt: "Fine dining and cocktails at North Scottsdale",
    },
    {
      id: "scottsdale-media-3",
      src: "https://cdn.ing/assets/i/r/289156/eiiflor2urddvyvqmhsbshoocown/dessert-buffet-with-cannoli-and-mini-cakes-at-event.jpg",
      alt: "Guests dining at North Scottsdale",
    },
  ],
  actions: [
    {
      label: "Directions",
      href: "https://maps.app.goo.gl/d1h87KXhi9gBPAJj9",
      icon: <DynamicIcon name="lucide/navigation" size={14} />,
      className: "shrink-0 flex-1 rounded-md",
      size: "md",
    },
    {
      href: "#",
      iconAfter: <DynamicIcon name="lucide/arrow-right" size={14} />,
      variant: "outline",
      size: "icon",
      className: "rounded-md",
    },
  ],
};

const mapProps: GeoMapProps = {
  stadiaApiKey,
  panelPosition: "bottom-left",
  mapWrapperClassName: "rounded-lg border border-border",
  showNavigationControl: true,
  showGeolocateControl: true,
  mapSize: {
    desktop: 700,
    mobile: 600,
  },
  markers: [downtownPhoenixMarker, northScottsdaleMarker],
  // clusters: [
  //   {
  //     id: "north-east-valley-cluster",
  //     label: "Clustered Region Example",
  //     title: "North Scottsdale Region",
  //     summary:
  //       "This demonstrates the optional clustered format used when multiple locations should be grouped under a region.",
  //     pinColor: "#0284c7",
  //     markers: [northScottsdaleMarker],
  //   },
  // ],
};

export default function Demo() {
  return (
    <ContactMap
      heading="Contact Us"
      description="We're here to help! Send us a message and we'll respond within 24 hours."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage:
          "Thank you for contacting us! We'll get back to you within 24 hours.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Send Message",
          },
        },
      }}
      background="gray"
      pattern="diagonalCrossFadeTop"
      patternOpacity={0.9}
      mapProps={mapProps}
    />
  );
}
