import { config } from "@/config";
import {
  buildWispClient,
  GetPostsResult,
  GetPostResult,
  GetTagsResult,
} from "@wisp-cms/client";

export const wisp = buildWispClient({
  blogId: config.wisp.blogId,
});

export type { GetPostsResult, GetPostResult, GetTagsResult };
