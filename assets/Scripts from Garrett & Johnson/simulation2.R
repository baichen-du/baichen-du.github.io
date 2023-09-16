layout(matrix(c(1,2,3,4,5,6),2,3,byrow=T))

phon <- rf(1000,10,30)
soc <- c(rnorm(900), rnorm(100,mean=6))

hist(phon,xlab="Phonetic output (with a bias factor)",ylab="Number of instances",main="Phonetic distribution",xlim=c(0,4))
hist(soc,xlab="Social group identity",main="Population distribution")

phon=sample(phon)  # randomize the order
soc=sample(soc)

plot(phon,soc,xlab="Phonetic output", ylab="Social identity", main="Bivariate random selection",xlim=c(0,4))

for(j in 1:3) {
for(i in 1:1000) {
	if(soc[i]<4) {  # hear the majority community as majority pron
		if(phon[i]>1.75 & runif(1)>0.2) { phon[i]=phon[i]-1 }
		
	} else if(j>1) { # hear the minority community as the minority pronunc.
		if(phon[i]<1.75 & runif(1)>0.2) { phon[i]=phon[i]+1 }
	}
}

mytitle<-paste("Selective perceptual compensation",j)
plot(phon,soc,xlab="Phonetic output",ylab="Social identity", main=mytitle,xlim=c(0,4))
}