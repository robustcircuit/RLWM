clear all.
versions=dir(pwd);
versions(1:2)=[];
versions([versions.isdir]==0)=[];

for v=1:length(versions)
    
    for s=1
        
        trialvec = readtable([versions(v).name '/S_' num2str(s) '/train.csv']) ;
        
        ntrials(v,s)=size(trialvec,1);
        nblocks(v,s)=max(trialvec.block_);
        [~,ix]=unique(trialvec.block_);
        sets{v,s}=trialvec.setSize(ix)
        imageSets{v,s}=unique(trialvec.imageFolder);
        
    end
end
        
% V1=520 (13 repeats 12 blocks) / 4ns2, 3ns3, 2ns4, 3ns5
% V2=468 (13 repeats 10 blocks) / 2ns2, 3ns3, 2ns4, 3ns5
% V3=400 (10 repeats 12 blocks) / 4ns2, 3ns3, 2ns4, 3ns5
% V4=360 (10 repeats 10 blocks) / 2ns2, 3ns3, 2ns4, 3ns5
% V5=600 (15 repeats 12 blocks) / 4ns2, 3ns3, 2ns4, 3ns5
% V6=600 (15 repeats 10 blocks) / 4ns2, 3ns3, 2ns4, 3ns5

% the first 4 S_ can be used to counterbalance for starting setsize

% V3=10 repeat / 12 blocks