export const Schema = z.object({
  女性化程度: z.coerce.number().min(0).max(100).prefault(0),
  沉沦程度: z.coerce.number().min(0).max(100).prefault(0),
  羞耻阈值: z.coerce.number().min(0).max(100).prefault(80),
  当前场景: z.string().prefault("天音宅"),
  雪乃不满度: z.coerce.number().min(0).max(100).prefault(0),
  雪乃调教强度: z.coerce.number().min(0).max(100).prefault(10),
  雪乃当前惩罚: z.string().prefault("无"),
  $药物累积量: z.coerce.number().min(0).max(100).prefault(5),
});
export type Schema = z.output<typeof Schema>;
