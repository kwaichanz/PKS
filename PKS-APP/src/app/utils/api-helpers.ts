export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

export function getStrapiMedia(url: string | null){
    if (url == null){
        return null;
    }

    // Return the full URL if the media is hosted on an external provider
    if (url.startsWith("http") || url.startsWith("//")) {
        return url;
    }
      return `${getStrapiURL()}${url}`;

}

export function getExtractedData(data: any, ...args: string[]){
  // console.log("getExtractedData", data.data[0].attributes);
  // console.log("data", data);
   const extractedData = data.data.map((item: any) => item.attributes);
  // console.log("extractedData", extractedData[0]);
  // Return all the extract data in arrays
  return extractedData
}

export function formatDate(dateString: string){
    const date = new Date(dateString)
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options)
}