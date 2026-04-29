export const baseUrl: string = process.env.NEXT_PUBLIC_ASSET_URL ?? "";
export const baseUrlApi: string = process.env.NEXT_PUBLIC_ASSET_URL ?? "";

type ImageLoaderParams = {
    src: string;
    width: number;
    quality?: number;
};

type ResponseResult = {
    value: string;
};

export function myLoader({
                             src,
                             width,
                             quality,
                         }: ImageLoaderParams): string {
    return `${baseUrl}/${src}?w=${width}&q=${quality ?? 75}`;
}

export function isValidJson(data: string): boolean {
    try {
        JSON.parse(data);
        return true;
    } catch {
        return false;
    }
}

export function validateResponse<T = unknown>(result: ResponseResult): T | Record<string, never> {
    if (!isValidJson(result.value)) {
        return {};
    }

    return JSON.parse(result.value) as T;
}

export const regex: RegExp =
    /<([a-zA-Z0-9]+)[^>]*>([^&nbsp;]*)<\/([a-zA-Z0-9]+)>/;