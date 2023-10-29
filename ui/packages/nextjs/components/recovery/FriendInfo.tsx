import { BlockieAvatar } from "../scaffold-eth";

type FriendInfoProps = {
  readonly address: string;
  readonly ensAvatar?: string;
  readonly ens?: string;
  readonly verified: boolean;
};

function FriendInfo(props: FriendInfoProps) {
  return (
    <div className="relative w-full h-full max-w-full !pb-12 pt-8 md:!pb-4 md:!pt-4 p-3 rounded-xl overflow-hidden flex flex-col items-center justify-center border border-[rgba(255,255,255,0.05)] turborepoCardBg">
      <div className="flex items-center justify-center flex-1 mb-7 md:mb-0">
        <div className="relative w-24 h-24">
          {/* TODO: hard coded address, ideally use friends address and avatar ensImage={account.ensAvatar} */}
          <BlockieAvatar address={props.address} size={96} ensImage={props.ensAvatar} />
        </div>
      </div>
      <div className="flex flex-col items-center flex-1">
        <p className="text-sm !w-[280px] md:!w-[340px] text-center opacity-50 dark:opacity-70">
          {props.ens ? props.ens : props.address}
        </p>
        <p>{props.verified ? "Your friend has verified the signature" : "Unverified"}</p>
      </div>
    </div>
  );
}

export default FriendInfo;
