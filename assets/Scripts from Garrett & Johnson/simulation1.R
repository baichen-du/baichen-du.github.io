layout(matrix(c(1,2,3,4,5,6),2,3,byrow=T))

phon <- c(rnorm(1000), rnorm(100,mean=6))
soc <- c(rnorm(1000), rnorm(100,mean=6))

hist(phon,xlab="Phonetic output (with a bias factor)",ylab="Number of instances",main="Phonetic distribution")
hist(soc,xlab="Social group identity",main="Population distribution")

phon=sample(phon)  # randomize the order
soc=sample(soc)

plot(phon,soc,xlab="Phonetic output", ylab="Social identity", main="Bivariate random selection")

for(j in 1:3) {
for(i in 1:1100) {
	if(soc[i]<4) {  # hear the majority community as majority pron
		if(phon[i]>3.5 & runif(1)>0.2) { phon[i]=phon[i]-2 }
		
	} else if(j>1) { # hear the minority community as the minority pronunc.
		if(phon[i]<3.5 & runif(1)>0.2) { phon[i]=phon[i]+2 }
	}
}

mytitle<-paste("Selective perceptual compensation",j)
plot(phon,soc,xlab="Phonetic output",ylab="Social identity", main=mytitle)
}