import jwt from "jsonwebtoken"

export function decodeMemberToken(memberToken: string, serviceKey: string) {
  const payload = jwt.verify(memberToken, serviceKey)
  if (typeof payload === "string") throw Error("인증 정보가 잘못되었습니다.")
  if (payload.mall_id !== "lcnine") throw Error("아몬드영에서 발급된 인증 정보가 아닙니다.")
  const almondId = payload.member_id as string | undefined
  if (!almondId) throw Error("인증 정보에 회원 정보가 없습니다.")
}